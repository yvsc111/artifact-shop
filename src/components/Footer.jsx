import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#9932cc', // Match primary theme color
        color: 'white',
        padding: '2rem 0',
        marginTop: '2rem',
        boxShadow: 3,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: '1rem' }}>
              О нас
            </Typography>
            <Typography variant="body2">
              Artifact Shop — это уникальный магазин, который предлагает своим клиентам возможность приобрести редкие и могущественные магические камни и артефакты. Наша миссия — сделать магию доступной для каждого, кто стремится к духовному росту, самопознанию и гармонии.
            </Typography>
          </Grid>

          {/* Quick Links Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: '1rem' }}>
              Быстрая навигация
            </Typography>
            <Box>
              <Link href="/" color="inherit" underline="none" sx={{ display: 'block', marginBottom: '0.5rem', '&:hover': { color: '#f50057' } }}>
                Главная
              </Link>
              <Link href="/shop" color="inherit" underline="none" sx={{ display: 'block', marginBottom: '0.5rem', '&:hover': { color: '#f50057' } }}>
                Магазин
              </Link>
              <Link href="/cart" color="inherit" underline="none" sx={{ display: 'block', marginBottom: '0.5rem', '&:hover': { color: '#f50057' } }}>
                Корзина
              </Link>
              <Link href="/login" color="inherit" underline="none" sx={{ display: 'block', marginBottom: '0.5rem', '&:hover': { color: '#f50057' } }}>
                Войти
              </Link>
              <Link href="/register" color="inherit" underline="none" sx={{ display: 'block', '&:hover': { color: '#f50057' } }}>
                Регистрация
              </Link>
            </Box>
          </Grid>

          {/* Contact Information Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: '1rem' }}>
              Свяжитесь с нами
            </Typography>
            <Typography variant="body2">
              Email:{' '}
              <Link href="mailto:suncov@list.ru" color="inherit" sx={{ textDecoration: 'underline', '&:hover': { color: '#f50057' } }}>
                suncov@list.ru
              </Link>
            </Typography>
            <Typography variant="body2">Телефон: +7 (951) 195-2439</Typography>
            <Typography variant="body2" sx={{ marginTop: '0.5rem' }}>
              Адрес: г. Ижевск
            </Typography>
          </Grid>
        </Grid>

        {/* Bottom Section */}
        <Box
          sx={{
            textAlign: 'center',
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            marginTop: '2rem',
            paddingTop: '1rem',
          }}
        >
          <Typography variant="body2">© {new Date().getFullYear()} Artifact-shop. Все права защищены.</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
