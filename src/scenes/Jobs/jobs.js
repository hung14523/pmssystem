import axios from 'axios';
import React from 'react';

import './jobs.css';

let url = "http://172.16.1.3/api/whcomm/hung/WebLink";
class Jobs extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data:[]
        }
    }
    componentDidMount() {
        axios.get('http://172.16.1.3/api/hung/gpstracking/wh/4',new Headers())
        .then(res => {
            console.log(res);
        });
    }
    render() {
        return (
            <>
                <div className="title">
                    Jobsログイン
                </div>
                <div className="updateText">
                    <label>
                        最終更新日：2020/05/01
                    </label>
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th style={{ width: "5%" }}>倉庫</th>
                                <th style={{ width: "8%" }}>ns</th>
                                <th style={{ width: "20%" }}>倉庫名</th>
                                <th style={{ width: "8%" }}></th>
                                <th style={{ width: "5%" }}></th>
                                <th style={{ width: "8%" }}></th>
                                <th style={{ width: "8%" }}></th>
                                <th style={{ width: "5%" }}>更新日</th>
                                <th style={{ width: "30%" }}>備考</th>
                            </tr>
                            <tr><th colSpan={9}>テスト環境（172.16.1.3）</th></tr>
                            <tr><th colSpan={9}><a href="http://172.16.1.3/csp/butsu/layout/index.html" target='_blank' rel="noreferrer">ファイルレイアウト一覧</a></th></tr>
                            <tr><th colSpan={9}><a href="http://172.16.1.3/csp/butsu/layout/index_k.html" target='_blank' rel="noreferrer">関数一覧</a></th></tr>
                            <tr><th colSpan={9}><a href="http://172.16.1.3/phpinformation.php" target='_blank' rel="noreferrer">PHP設定情報</a></th></tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ width: "5%", textAlign: "right" }}>4</td>
                                <td style={{ width: "8%" }}>HUNG</td>
                                <td style={{ width: "20%" }}>HUNGテスト</td>
                                <td style={{ width: "8%" }}></td>
                                <td style={{ width: "8%" }}></td>
                                <td style={{ width: "8%" }}></td>
                                <td style={{ width: "8%" }}></td>
                                <td style={{ width: "5%" }}></td>
                                <td style={{ width: "30%" }}></td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </>
        )
    }
}
export default Jobs;