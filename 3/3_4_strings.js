// const styled = (css) => console.log(css);
// styled(`border-radius:10px; color:blue`);
// styled`border-radius:10px;
// color:blue`;

// const styled = (aElement) => {
//   const el = document.createElement(aElement);
//   return el;
// };
// const title = styled("h1");
// console.log(title);

const styled = (aElement) => {
  const el = document.createElement(aElement);
  return (args) => {
    console.log(args[0]);
    const styles = args[0];
    el.style = styles;
    return el;
  };
};

const title = styled("h1")`
  background-color: red;
  border-radius: 10px;
  color: blue;
`;
const subTitle = styled("span")`
  color: green;
`;
console.log(title);

title.innerText = "We just cloned";
subTitle.innerText = "Styled Components";
document.body.append(title, subTitle);
