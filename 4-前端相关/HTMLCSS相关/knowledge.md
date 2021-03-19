# block/inline-block/inline
inline不可以设置宽高/margin和padding的上下  
block和inline-block均可  
block可含任意元素  
inline只能含文本或inline    
  
# box model  
标准盒模型(box-sizing:content-box):width/height是content的大小  
怪异盒模型(box-sizing:border-box):width/height是content+padding+border的大小(即盒子大小)  
flex盒模型  
多列布局:column-count指定分割列数  
  
# 经典布局  
圣杯布局:浮动+padding+负margin  
双飞翼布局(左右固定中间自适应):浮动+margin+负margin  
CALC(改双飞翼):浮动+CALC+负margin  
flex  
定位  

# 响应式布局  
媒体查询(一套项目)  
电脑px，移动端rem(两套项目)  
flex  
vh/vw  
  