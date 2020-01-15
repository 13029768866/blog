import {Avatar,Divider} from "antd";
import '../public/components/author.css';

const Author = () =>{
    return(
        <div className="author-div comm-box">
            <div>
                <Avatar size={100} src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3034683371,265911714&fm=26&gp=0.jpg"/>
            </div>
            <div className="author-introduction">
                江湖没什么好的，也就酒还行
                <Divider>人间不值得</Divider>
                <Avatar size={28} className="account" icon="github" />
                <Avatar size={28} className="account" icon="qq" />
                <Avatar size={28} className="account" icon="wechat" />
            </div>
        </div>
    )
}

export default Author;