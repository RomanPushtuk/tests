import { retrier } from "./retrier";

test("should be error", done => {
    function cb(res){
        expect(res).toBe("Неудача");
        done();
    }

    retrier(cb);
});

test("should be return result", done => {
    function cb(res){
        expect(res).toBe("Успешно");
        done();
    }

    retrier(cb, "http://ya.ru");
});