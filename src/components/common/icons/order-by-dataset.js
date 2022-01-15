import React from 'react';
import Base from './base';
import PropTypes from 'prop-types';

const OrderByDataset = props => (
  <Base {...props}>
    <path
      d="M14.7225 13.7778C14.7225 14.1294 14.6183 14.4731 14.4229 14.7655C14.2276 15.0578 13.9499 15.2857 13.6251 15.4202C13.3003 15.5548 12.9428 15.59 12.5979 15.5214C12.2531 15.4528 11.9363 15.2835 11.6877 15.0349C11.4391 14.7862 11.2697 14.4695 11.2012 14.1246C11.1326 13.7798 11.1678 13.4223 11.3023 13.0975C11.4369 12.7726 11.6647 12.495 11.9571 12.2996C12.2494 12.1043 12.5932 12 12.9448 12C13.4163 12 13.8685 12.1873 14.2018 12.5207C14.5352 12.8541 14.7225 13.3063 14.7225 13.7778ZM23.5003 13.7778C23.5003 13.542 23.4067 13.3159 23.24 13.1492C23.0733 12.9825 22.8472 12.8889 22.6114 12.8889H18.2781C18.0424 12.8889 17.8163 12.9825 17.6496 13.1492C17.4829 13.3159 17.3892 13.542 17.3892 13.7778C17.3892 14.0135 17.4829 14.2396 17.6496 14.4063C17.8163 14.573 18.0424 14.6667 18.2781 14.6667H22.6114C22.8472 14.6667 23.0733 14.573 23.24 14.4063C23.4067 14.2396 23.5003 14.0135 23.5003 13.7778ZM12.9448 18.2222C12.5932 18.2222 12.2494 18.3265 11.9571 18.5218C11.6647 18.7172 11.4369 18.9948 11.3023 19.3197C11.1678 19.6445 11.1326 20.002 11.2012 20.3468C11.2697 20.6917 11.4391 21.0085 11.6877 21.2571C11.9363 21.5057 12.2531 21.675 12.5979 21.7436C12.9428 21.8122 13.3003 21.777 13.6251 21.6425C13.9499 21.5079 14.2276 21.28 14.4229 20.9877C14.6183 20.6953 14.7225 20.3516 14.7225 20C14.7225 19.5285 14.5352 19.0763 14.2018 18.7429C13.8685 18.4095 13.4163 18.2222 12.9448 18.2222ZM23.5003 20C23.5003 19.7643 23.4067 19.5382 23.24 19.3715C23.0733 19.2048 22.8472 19.1111 22.6114 19.1111H18.2781C18.0424 19.1111 17.8163 19.2048 17.6496 19.3715C17.4829 19.5382 17.3892 19.7643 17.3892 20C17.3892 20.2357 17.4829 20.4618 17.6496 20.6285C17.8163 20.7952 18.0424 20.8889 18.2781 20.8889H22.6114C22.8472 20.8889 23.0733 20.7952 23.24 20.6285C23.4067 20.4618 23.5003 20.2357 23.5003 20Z"
      fill={props.fill}
    />
    <path
      d="M6.77778 6C6.42617 6 6.08245 6.10426 5.7901 6.29961C5.49774 6.49495 5.26988 6.7726 5.13533 7.09745C5.00077 7.4223 4.96556 7.77975 5.03416 8.1246C5.10276 8.46946 5.27207 8.78623 5.5207 9.03486C5.76933 9.28348 6.0861 9.4528 6.43095 9.5214C6.77581 9.58999 7.13326 9.55479 7.4581 9.42023C7.78295 9.28567 8.0606 9.05781 8.25595 8.76546C8.45129 8.4731 8.55556 8.12939 8.55556 7.77778C8.55556 7.30628 8.36826 6.8541 8.03486 6.5207C7.70146 6.1873 7.24927 6 6.77778 6ZM23.3333 7.77778C23.3333 7.54203 23.2397 7.31594 23.073 7.14924C22.9063 6.98254 22.6802 6.88889 22.4444 6.88889H12.1111C11.8754 6.88889 11.6493 6.98254 11.4826 7.14924C11.3159 7.31594 11.2222 7.54203 11.2222 7.77778C11.2222 8.01353 11.3159 8.23962 11.4826 8.40632C11.6493 8.57302 11.8754 8.66667 12.1111 8.66667H22.4444C22.6802 8.66667 22.9063 8.57302 23.073 8.40632C23.2397 8.23962 23.3333 8.01353 23.3333 7.77778Z"
      fill={props.fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.2998 9H6.2998V19.5V20V20.5H11.2998V19.5H7.2998V14.4H11.4004V13.4H7.2998V9Z"
      fill={props.fill}
    />
  </Base>
);
OrderByDataset.propTypes = {
  /** Set the height of the icon, ex. '16px' */
  height: PropTypes.string,
  fill: PropTypes.string
};
OrderByDataset.defaultProps = {
  height: '20px',
  fill: 'currentColor',
  viewBox: '0 0 24 24',
  predefinedClassName: 'data-ex-icons-order-by-dataset'
};

export default OrderByDataset;
