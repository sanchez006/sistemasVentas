import PropTypes from 'prop-types';

export const TableCell = ({ children, className, isHeader = false, headerClassName = '' }) => {
  const Tag = isHeader ? 'th' : 'td';
  return (
    <Tag className={isHeader ? `${className} ${headerClassName}` : className}>
      {children}
    </Tag>
  );
};

TableCell.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isHeader: PropTypes.bool,
  headerClassName: PropTypes.string,
};
