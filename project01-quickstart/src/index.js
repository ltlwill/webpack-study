import _ from 'lodash';               // ����lodashģ��
import './style.css';                 // ������ʽ��Դ
import bgImage from './bg.jpg';       // ����ͼƬ��Դ
import xmlData from './xml-data.xml'; // ����xml�ļ�����

function component() {
  let element = document.createElement('div');

  // Lodash��Ŀǰͨ��һ�� script �ű����룩����ִ����һ���Ǳ����
  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('demo');
  
  // ����ͼ��
  let img = new Image();
  img.src = bgImage;
  element.appendChild(img);
  
  console.log(xmlData);
  
  return element;
}

document.body.appendChild(component());


