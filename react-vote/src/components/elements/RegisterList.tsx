import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { join } from '../../api/userRequest';
import { userState } from '../../states/loginState';
import { setRefreshToken } from '../../storage/Cookie';
import SubmitButton from '../Icons/SubmitButton';

const RegisterList = () => {
  const [user, setUser] = useRecoilState(userState);
  const navigate = useNavigate();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const [isActive, setIsActive] = useState(false);

  const onSubmit = async (data: any) => {
    if (data.password !== data.confirm_password) {
      alert('비밀번호가 일치하지 않아요 🥲');
      console.log(data.password);
      console.log(data.confim_password);
      return;
    }
    const response = await join({
      user_id: data.user_id,
      name: data.name,
      email: data.email,
      password: data.password,
      part: data.part,
      team: data.team,
      is_candidate: true,
    });
    if (response) {
      setRefreshToken(response.token.refresh);
      setUser(response);
      alert('가입완료');
      navigate('/login');
    }
  };

  const onError = (error: any) => {
    alert('입력이 덜 됐어요 🙁');
  };

  return (
    <RegisterForm onSubmit={handleSubmit(onSubmit, onError)}>
      <input
        type="text"
        placeholder="name"
        {...register('name', {
          required: true,
          maxLength: {
            value: 10,
            message: 'Name must be shorter than 20 characters',
          },
          minLength: {
            value: 1,
            message: 'Name must be longer than 1 characters',
          },
        })}
      />

      <input
        type="text"
        placeholder="id"
        {...register('user_id', {
          required: true,
          maxLength: {
            value: 20,
            message: 'Id must be shorter than 20 characters',
          },
          minLength: {
            value: 1,
            message: 'Id must be longer than 1 characters',
          },
        })}
      />

      <input
        type="email"
        placeholder="email"
        {...register('email', {
          required: true,
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
            message: 'Not email format',
          },
        })}
      />
      <input
        type="password"
        placeholder="password"
        {...register('password', {
          required: true,
          maxLength: {
            value: 30,
            message: 'Password must be shorter than 30 characters',
          },
          minLength: {
            value: 1,
            message: 'Password must be longer than 1 characters',
          },
        })}
      />
      <input
        type="password"
        placeholder="confirm_password"
        {...register('confirm_password', {
          required: true,
          maxLength: {
            value: 30,
            message: 'Password must be shorter than 30 characters',
          },
          minLength: {
            value: 1,
            message: 'Password must be longer than 1 characters',
          },
        })}
      />
      <select {...register('team')}>
        <option value="finble">Finble</option>
        <option value="prefolio">Pre:folio</option>
        <option value="teample">Teample</option>
        <option value="diametes">diaMEtes</option>
        <option value="recipeasy">Recipeasy</option>
      </select>
      <RadioWrapper>
        <div>
          <input type="radio" id="part" value="frontend" {...register('part', { required: true })} />
          Front-end
        </div>
        <div>
          <input type="radio" value="backend" {...register('part', { required: true })} />
          Back-end
        </div>
      </RadioWrapper>
      <SubmitButton content={'Join'} isActive={true} />
    </RegisterForm>
  );
};

export default RegisterList;

const RegisterForm = styled.form`
  width: 370px;

  display: flex;
  flex-direction: column;
`;

const RadioWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
