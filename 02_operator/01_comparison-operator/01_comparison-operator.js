// 01_비교 연산자
// 비교 연산자는 좌항과 우항의 비교 연산자를 비교한 다음 그 결과를 불리언 값으로 반환한다.
// if문이나 for문과 같은 제어문의 조건식에서 주로 사용한다.

// 동등/일치 비교 연산자
// 동등 비교 연산자와 일치 비교 연산자는 비교한ㄴ 엄격성의 정도가 다르다.
// 동등 비교(== !=) 연산자는 먼저 암묵적 타입 변환을 통해 타입을 일치시킨 후 같은 값인지 비교한다.
// 일치 비교(===, !==) 연산자 타입과 값이 모두 일치하는지 비교한다.

console.log(`1 == '1' : ${1 == '1'}`);
console.log(`1 == true : ${1 == true}`);

console.log(`1 === '1' : ${1 === '1'}`);
console.log(`1 === true : ${1 === true}`);

console.log(`0 == '0' : ${0 == '0'}`);
console.log(`0 == '' : ${0 == ''}`);
console.log(`0 == false : ${0 == false}`);

console.log(`0 === '0' : ${0 === '0'}`);
console.log(`0 === '' : ${0 === ''}`);
console.log(`0 === false : ${0 === false}`);

console.log(`null == undefined : ${null == undefined}`);
console.log(`null === undefined : ${null === undefined}`);

// NaN은 자신과 일치하는 않는 유일한 값이다.
console.log(`NaN == NaN : ${NaN == NaN}`);
console.log(`NaN === NaN : ${NaN === NaN}`);

// 빌트인 한수 Number.isNaN을 사용해서 확인해야 한다.
console.log(`Number.isNaN(NaN) : ${Number.isNaN(NaN)}`);

// 일치 비교 연산자
console.log(`'hello' === 'hello'  : ${'hello' === 'hello'}`);
console.log(`'hello' !== 'hello'  : ${'hello' !== 'hello'}`);

// 대소 비교 연산자
console.log(`'apple' > 'banana' : ${'apple' > 'banana'}`);
console.log(`'cat' >= 'Zoo' : ${'cat' >= 'Zoo'}`);  // 대문자가 소문자보다 작다