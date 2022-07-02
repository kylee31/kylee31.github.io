const slides = document.querySelector('.slides'); //전체 슬라이드 컨테이너
const slideImg = document.querySelectorAll('.slides li'); //모든 슬라이드들
let currentIdx = 0; //현재 슬라이드 index
const slideCount = slideImg.length; // 전체 슬라이드 개수
const prev = document.querySelector('.prev'); //이전 버튼
const next = document.querySelector('.next'); //다음 버튼
const slideWidth = 300; //하나의 슬라이드 넓이
const slideMargin = 100; //슬라이드 margin값

//전체 슬라이드 컨테이너 넓이 설정
slides.style.width = (slideWidth + slideMargin) * slideCount + 'px';

function moveSlide(num) {
    slides.style.left = -num * 240 + 'px';
    currentIdx = num;
}

prev.addEventListener('click', function () {
  /*첫 번째 슬라이드로 표시 됐을때는  이전 버튼 눌러도 아무런 반응 없도록 
  currentIdx !==0일때만 moveSlide 함수 불러옴 */

    if (currentIdx !== 0) moveSlide(currentIdx - 1);
});

next.addEventListener('click', function () {
    //슬라이드에서는 하나의 사진만 보였는데 총 4개 이미지를 보여주도록 변경
    if (document.documentElement.clientWidth >= 790) {
        if (currentIdx !== slideCount - 4) {
            moveSlide(currentIdx + 1);
        }
    }
    else{
        if (currentIdx !== slideCount - 1) {
            moveSlide(currentIdx + 1);
        }
    }
});