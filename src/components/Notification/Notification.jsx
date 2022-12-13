import propTypes from 'prop-types';
import {Message} from 'components/Notification/Notification.styled'


export const Notification = ({ message }) => <Message>{message}!!!</Message>;

Notification.propTypes = {
  message: propTypes.string.isRequired,
};