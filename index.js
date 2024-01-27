import axios from "axios";
const checkHinet = () => {
    axios({
        method: 'get',
        url: 'https://notify-api.line.me/api/notify',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'authorization': process.env.LINE_NOTIFY_TOKEN,
        },
        data: {
            message: "Github action test"
        }
    }).catch((error) => {
        console.log(error);
    });
};
checkHinet();