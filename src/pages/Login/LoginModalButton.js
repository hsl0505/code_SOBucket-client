import React from 'react';
import { Button } from 'antd';
import LoginModal from './LoginModal';

class LoginModalButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    const { handleCancel, showModal, hideModal } = this;
    const { visible } = this.state;
    return (
      <div>
        <Button
          className="mainNav_loginBtn"
          type="primary"
          size="large"
          onClick={showModal}
        >
          Log In
        </Button>
        <LoginModal
          hideModal={hideModal}
          visible={visible}
          handleCancel={handleCancel}
        />
      </div>
    );
  }
}

export default LoginModalButton;