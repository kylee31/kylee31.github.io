const slides = document.querySelector('.slides'); //��ü �����̵� �����̳�
const slideImg = document.querySelectorAll('.slides li'); //��� �����̵��
let currentIdx = 0; //���� �����̵� index
const slideCount = slideImg.length; // �����̵� ����
const prev = document.querySelector('.prev'); //���� ��ư
const next = document.querySelector('.next'); //���� ��ư
const slideWidth = 300; //�Ѱ��� �����̵� ����
const slideMargin = 100; //�����̵尣�� margin ��

//��ü �����̵� �����̳� ���� ����
slides.style.width = (slideWidth + slideMargin) * slideCount + 'px';

function moveSlide(num) {
    slides.style.left = -num * 240 + 'px';
    currentIdx = num;
}

prev.addEventListener('click', function () {
    /*ù ��° �����̵�� ǥ�� �������� ���� ��ư ������ �ƹ��� ���� ���� �ϱ� ���� 
    currentIdx !==0�϶��� moveSlide �Լ� �ҷ��� */

    if (currentIdx !== 0) moveSlide(currentIdx - 1);
});

next.addEventListener('click', function () {
    /* ������ �����̵�� ǥ�� ���� �� ���� ��ư ������ �ƹ��� ���� ���� �ϱ� ���� ~-3�϶� moveSlide �Լ� �ҷ��� */
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
