import axios from "axios";

const sendMessage = (msg) => {
    axios({
        method: 'post',
        url: 'https://notify-api.line.me/api/notify',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'authorization': process.env.LINE_NOTIFY_TOKEN,
        },
        data: `message=${msg}`
    }).catch((error) => {
        console.log(error);
    });
};

const checkHinet = () => {
    axios({
        method: 'get',
        url: 'http://114.32.153.24/',
    }).catch((error) => {
        console.log(error);
        sendMessage("中華電信固定IP已中斷！");
    });
};

checkHinet();
