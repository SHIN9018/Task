/**
 * tru...catch
 * 1) 발생시킬 때 -> 던진다고 한다 (throw)
 * 2) 명시적으로 인지할 떄 잡는다고 한다 (catch)
 */

function runner() {
    try {
        console.log('hello');
        //에러 발생
        throw new Error('큰 문제가 생겼습니다!');

        console.log('Code Factory');
    } catch (e) {
        console.log('---catch---');
        console.log(e);
    } finally {
        //finally 는 무조건 실행이 된다 써도 되고 안써도 되는 옵셔널 
        console.log('---finally---');
    }

}
runner();