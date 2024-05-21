import typesProps from 'prop-types'

export const Button = ({ onClick, className, children }) => {
  return (
    <button
      onClick={onClick}
      className={className}>
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: typesProps.func.isRequired,
  className: typesProps.string,
  children: typesProps.node.isRequired,
}