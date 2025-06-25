/* Global byId */
{
  const headlineElement = byId('static');
  const headlineRecInfo = headlineElement.getBoundingClientRect();
  
  // 수치 정보
  console.log(headlineRecInfo.x);
  console.log(headlineRecInfo.y);

  // 좌표 정보
  console.log(headlineRecInfo.left);
  console.log(headlineRecInfo.top);
  console.log(headlineRecInfo.right);
  console.log(headlineRecInfo.bottom);
}