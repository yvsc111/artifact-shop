import * as React from 'react';
import { Typography, Box, Button } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useNavigate } from 'react-router-dom';

function OrderConfirmation() {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate('/shop');
  };

  return (
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      <CheckCircleOutlineIcon sx={{ fontSize: 100, color: 'green', mb: 2 }} />
      <Typography variant="h4" gutterBottom>
        Заказ успешно оформлен!
      </Typography>
      <Typography variant="body1" paragraph>
        Спасибо за вашу покупку. Ваш заказ находится в обработке.
      </Typography>
      <Button variant="contained" onClick={handleContinueShopping}>
        Продолжить покупки
      </Button>
    </Box>
  );
}

export default OrderConfirmation;
