import React, { useCallback, useEffect, useState } from 'react';
import css from 'app/pages/MyPage/MyPage.module.css';
import MyPageBox from 'app/components/MyPageBox/MyPageBox';
import MyPageSocialBox from 'app/components/MyPageSocialBox/MyPageSocialBox';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'app/slices/auth';
import axios from 'axios';
import { AppDispatch } from 'app/store';
import { useNavigate } from 'react-router-dom';

const MyPage = () => {
  const navigate = useNavigate();
  const email = localStorage.getItem('email');
  const [userInfo, setUserInfo] = useState<any>([]);
  const refreshToken = localStorage.getItem('refreshToken');
  const accessToken = localStorage.getItem('accessToken');
  const dispatch = useDispatch<AppDispatch>();
  const logOut = useCallback(() => {
    dispatch(logout({ refreshToken, accessToken }));
  }, [dispatch, refreshToken, accessToken]);

  const secession = () => {
    axios
      .delete(`/webhook/d41bd001-de41-4441-bb14-a90b56f926c8/${email}`)
      .then((response) => {
        if (response?.status === 200) {
          logOut();
          alert('탈퇴가 완료되었습니다.');
          navigate('/');
          window.scrollTo(0, 0);
          window.localStorage.clear();
        }
      })
      .catch((err) => {
        return err;
      });
  };

  const username = userInfo?.username;
  const userEmail = userInfo?.email;
  const phone_number = userInfo?.phone_number;
  const postal_code = userInfo?.postal_code;
  const birthdate = userInfo?.birthdate;
  const gender = userInfo?.gender;
  const address = userInfo?.address;

  return (
    <div className={css['mypage-container']}>
      <div className={css['mypage-top-box']}>
        <img className={css.back} src="/images/back.png" alt="뒤로가기" />
        <h1 className={css['mypage-header']}>마이페이지</h1>
      </div>
      <div className={css['mypage-sub-box']}>
        <img className={css.person} src="/images/person.png" alt="회원정보" />
        <div className={css['user-info']}>회원정보</div>
      </div>
      <MyPageBox infoType="닉네임" infoContent={username} />
      <MyPageBox infoType="이메일" infoContent={userEmail} />
      <MyPageBox infoType="비밀번호" infoContent="testtest123!" />

      <div className={css['mypage-sub-box']}>
        <img className={css.person} src="/images/verified.png" alt="개인정보" />
        <div className={css['user-info']}>개인정보</div>
      </div>
      <MyPageBox infoType="이름" infoContent="김민지" />
      <MyPageBox infoType="성별" infoContent={gender} />
      <MyPageBox infoType="생년월일" infoContent={birthdate} />
      <MyPageBox infoType="핸드폰 번호" infoContent={phone_number} />
      <MyPageBox
        infoType="사는 곳"
        infoContent={[postal_code, address, address]}
      />

      <div className={css['mypage-sub-box']}>
        <img className={css.person} src="/images/key.png" alt="SNS 연동" />
        <div className={css['user-info']}>SNS 연동</div>
      </div>
      <MyPageSocialBox infoType="구글" socialImg="/images/google.png" />
      <MyPageSocialBox infoType="카카오" socialImg="/images/kakao.png" />

      <div className={css['mypage-secession-box']}>
        <div className={css['secession']}>회원 탈퇴</div>
      </div>
      <ul className={css['secession-info']}>
        <li>탈퇴 후 7일간 재가입이 불가능합니다.</li>
        <li>유료 구매한 아이템은 자동 소멸되며, 환불이 불가능합니다.</li>
        <li>
          탈퇴 시 계정의 모든 정보는 삭제되며 재가입 시에도 복구 되지 않습니다.
        </li>
      </ul>
      <button className={css['secession-btn']} onClick={secession}>
        탈퇴하기
      </button>
    </div>
  );
};

export default MyPage;
