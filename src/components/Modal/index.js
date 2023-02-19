import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { BrandTelegram, BrandWhatsapp, Check } from 'tabler-icons-react';

import { useModalContext } from '../../helpers/hooks/useModalContext';
import Loader from '../Loader';
import {
  Button,
  ButtonBlock,
  CloseButton,
  CloseButtonWrapper,
  Container,
  ContentWrapper,
  Description,
  DoneIcon,
  ErrorTitle,
  Form,
  InformTitle,
  Input,
  InputGroup,
  InputLabelGroup,
  Label,
  PhoneInputMask,
  SocialButton,
  SocialButtonGroup,
  Title,
  Wrapper,
} from './styles';

const Modal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
    control,
  } = useForm();
  const { isOpen, closeModal } = useModalContext();

  const [isLoading, setIsLoading] = useState(false);
  const [application, setApplication] = useState({});

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const response = await fetch('https://638b31f17220b45d228a6896.mockapi.io/api/v1/application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const fetchedData = await response.json();
      setApplication(fetchedData);
      setIsLoading(false);
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  const handleCloseModal = () => {
    closeModal();
    reset();
  };

  const phoneRegEx = /(^8|7|\+7)((\d{10})|(\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}))/;

  return (
    <Wrapper opened={isOpen} onClick={handleCloseModal}>
      <ContentWrapper opened={isOpen} onClick={(event) => event.stopPropagation()}>
        <CloseButtonWrapper>
          <CloseButton onClick={handleCloseModal} />
        </CloseButtonWrapper>

        <Container>
          <Title>Онлайн-заявка</Title>

          <Description>
            Заполните форму, и мы вскоре свяжемся с вами, чтобы ответить на все вопросы
          </Description>

          <Form onSubmit={handleSubmit(onSubmit)}>
            <InputGroup error={errors.phone || errors.name}>
              <InputLabelGroup>
                <Controller
                  name="phone"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: {
                      value: true,
                      message: 'Ошибка, заполните поле "Телефон"!',
                    },
                    pattern: {
                      value: phoneRegEx,
                      message: 'Ошибка, "Телефон" должен быть 18 символов!',
                    },
                  }}
                  render={({ field }) => (
                    <PhoneInputMask
                      mask="+7 (999) 999 99 99"
                      value={field.value}
                      onChange={field.onChange}
                      error={errors.phone}
                    />
                  )}
                />
                <Label htmlFor="phone" active={!!getValues('phone')}>
                  {errors.phone ? 'Ошибка' : 'Телефон *'}
                </Label>
                {errors.phone && errors.phone.type === 'required' && (
                  <ErrorTitle>{errors.phone.message}</ErrorTitle>
                )}
                {errors.phone && errors.phone.type === 'pattern' && (
                  <ErrorTitle>{errors.phone.message}</ErrorTitle>
                )}
                {getValues('phone')?.match(phoneRegEx) && !errors.phone && (
                  <DoneIcon>
                    <Check size={16} strokeWidth={2} color={'white'} />
                  </DoneIcon>
                )}
              </InputLabelGroup>
              <InputLabelGroup>
                <Input
                  id="name"
                  type="text"
                  {...register('name', {
                    required: {
                      value: true,
                      message: 'Ошибка, заполните поле "Имя"!',
                    },
                    minLength: {
                      value: 3,
                      message: 'Ошибка, "Телефон" должен быть не меньше 3 символов!',
                    },
                  })}
                  error={errors.name}
                />
                <Label htmlFor="name" active={!!getValues('name')}>
                  {errors.name ? 'Ошибка' : 'Имя *'}
                </Label>
                {errors.name && errors.name.type === 'required' && (
                  <ErrorTitle>{errors.name.message}</ErrorTitle>
                )}
                {errors.name && errors.name.type === 'minLength' && (
                  <ErrorTitle>{errors.name.message}</ErrorTitle>
                )}
                {getValues('name')?.length >= 3 && !errors.name && (
                  <DoneIcon>
                    <Check size={16} strokeWidth={2} color={'white'} />
                  </DoneIcon>
                )}
              </InputLabelGroup>
            </InputGroup>

            <ButtonBlock>
              <InformTitle>
                Нажимая на кнопку «Оставить заявку», я даю согласие&nbsp;
                <span>на обработку персональных данных</span>
              </InformTitle>
              <Button type="submit">
                {isLoading ? <Loader size={21} color={'#ffff'} /> : 'Оставить заявку'}
              </Button>
            </ButtonBlock>
          </Form>

          <SocialButtonGroup>
            <SocialButton>
              <a href="https://web.telegram.org/k/" target="_blank">
                <BrandWhatsapp size={20} strokeWidth={2} />;
              </a>
            </SocialButton>
            <SocialButton>
              <a href="https://twitter.com/?lang=ru" target="_blank">
                <BrandTelegram size={20} strokeWidth={2} />;
              </a>
            </SocialButton>
          </SocialButtonGroup>
        </Container>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Modal;
