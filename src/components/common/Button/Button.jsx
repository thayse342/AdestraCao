import { PrimaryButton, SecondaryButton } from "./button.style";

const Button = ({ texto, variant, width, height, onClick, fontSize }) => {
  return (
    <>
      {variant == 'primary' && <PrimaryButton onClick={onClick} width={width} height={height} fontSize={fontSize}>{texto}</PrimaryButton>}
      {variant == 'secondary' && <SecondaryButton onClick={onClick} width={width} height={height} fontSize={fontSize}>{texto}</SecondaryButton>}
    </>
  );
};

export default Button;
