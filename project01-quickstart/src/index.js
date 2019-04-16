import _ from 'lodash';               // 导入lodash模块
import './style.css';                 // 导入样式资源
import bgImage from './bg.jpg';       // 导入图片资源
import xmlData from './xml-data.xml'; // 导入xml文件数据

function component() {
  let element = document.createElement('div');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('demo');
  
  // 加入图像
  let img = new Image();
  img.src = bgImage;
  element.appendChild(img);
  
  console.log(xmlData);
  
  return element;
}

document.body.appendChild(component());


