/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

import './jobs.css';

let url = "http://172.16.1.3/api/whcomm/hung/WebLink";
class ShowList extends React.Component {
    render() {
        return (
            <>
                <tr>
                    <td style={{ width: "5%", textAlign: "right" }}><Link to={this.props.ns+"/"+this.props.whcd+"/login"}>{this.props.whcd}</Link></td>
                    <td style={{ width: "8%" }}><Link to={this.props.ns+"/"+this.props.whcd+"/login"}>{this.props.ns}</Link></td>
                    <td style={{ width: "20%" }}><Link to={this.props.ns+"/"+this.props.whcd+"/login"}>{this.props.whnm}</Link></td>
                    <td style={{ width: "8%", textAlign: "center" }}><Link to={this.props.ns+"/"+this.props.whcd+"/login"}>ログイン</Link></td>
                    <td style={{ width: "8%" }}></td>
                    <td style={{ width: "8%" }}></td>
                    <td style={{ width: "8%" }}></td>
                    <td style={{ width: "5%" }}></td>
                    <td style={{ width: "30%" }}></td>
                </tr>
            </>
        );
    }
}
class Jobs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sokos: [],
            update_day: '2022/05/02'
        }
    }
    componentDidMount() {
        axios.post(url, new URLSearchParams({ 'rtn': 'GetAllSoko^REACTAPI()' }), { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
            .then((response) => {
                const sokos = JSON.parse(JSON.stringify(response.data['data']));
                this.setState({ sokos: sokos });
                //console.log(sokos);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    render() {
        const listItems = this.state.sokos.map(soko => (
            <ShowList key={soko.whcd} whcd={soko.whcd} whnm={soko.whnm} ns={soko.ns} />
        ));
        return (
            <>
                <div className="title">
                    Jobsログイン
                </div>
                <div className="updateText">
                    <label>
                        最終更新日：{this.state.update_day}
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
                            {listItems}
                        </tbody>

                    </table>
                </div>
            </>
        )
    }
}
export default Jobs;