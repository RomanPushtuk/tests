import fetch from "node-fetch";

export function retrier(cb, url = "", attempts = 10, err = null) {
    if (attempts >= 0){
        return fetch(url).then(() => cb("Успешно"), (err) => retrier(cb, url, --attempts, err))
    } else {
        return cb("Неудача");
    }
}