import React from 'react';
import PropTypes from 'prop-types';
// import 'antd/dist/antd.css';
import { Card, Skeleton } from 'antd';
import Like from './Like';
import GetBucket from './GetBucket';
import testimg from '../../img/test_img.jpg';

export default function Bucket(props) {
  const { Meta } = Card;
  const { bucket, bucketListLoad, isLogin } = props;

  return (
    <div className="bucket">
      <Card
        className="bucketCard"
        hoverable
        cover={
          bucketListLoad ? (
            <div>example</div>
          ) : (
            <img className="testimg" alt="example" src={testimg} />
          )
        }
      >
        <Skeleton className="bucketCard_skeleton" loading={bucketListLoad}>
          <Meta
            className="bucketCard_meta"
            title={bucket.title}
            description={bucket.userNickName}
          />
        </Skeleton>
        <div className="btns">
          <Like
            likeCount={bucket.likeCount}
            isLogin={isLogin}
            mylike={bucket.mylike}
            bucketId={bucket.id}
          />
          <GetBucket isLogin={isLogin} bucket={bucket} />
        </div>
      </Card>
    </div>
  );
}

Bucket.defaultProps = {
  bucket: {},
  bucketListLoad: true,
  isLogin: false,
};

Bucket.propTypes = {
  bucket: PropTypes.shape({
    id: PropTypes.number,
    userNickName: PropTypes.string,
    title: PropTypes.string,
    likeCount: PropTypes.number,
    mylike: PropTypes.bool,
  }),
  bucketListLoad: PropTypes.bool,
  isLogin: PropTypes.bool,
};
