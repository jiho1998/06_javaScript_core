// 04_프로퍼티 값 변경, 추가, 삭제

var cat = {
    name : '라이언'
};

// 이미 존재하는 프로퍼티에 값을 할당하면 프로퍼티 값이 갱신된다.
cat.name = '두부';
cat['name'] = '춘식이';
console.log(cat);

// 프로퍼티 동적 추가
// 존재하지 않는 프로퍼티 값을 할당하면 프로퍼티가 동적으로 생성 되어 추가되고 프로퍼티 값이 할당 된다.
cat.age = 3;
cat['age'] = 6;
console.log(cat);

// 프로퍼티 삭제
// delete 연산자는 객체의 프로퍼티를 삭제한다.
// 만약 존재하지 않는 프로퍼티를 삭제하면 아무런 에러 없이 무시된다.
// delete cat.age;
delete cat['age'];
// delete cat.something;
delete cat['something'];
console.log(cat);