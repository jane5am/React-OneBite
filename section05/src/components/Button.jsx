// const Button = (props) => {
//   console.log(props);
//   return ( 
//     <button style={{color : props.color}}>
//       {props.text} - {props.color.toUpperCase()}
//     </button>
//   )
// };

// 구조분해할당 방법
const Button = ({text, color, children }) => {
  console.log(text);
  console.log(color);
  console.log(children); // {$$typeof: Symbol(react.element), type: 'div', key: null, ref: null, props: {…}, …}

  return ( 
    <button style={{color : color}}>
      {text} - {color.toUpperCase()}
      {children}
    </button>
  )
};

Button.defaultProps = {
  color: "black",
}

export default Button;