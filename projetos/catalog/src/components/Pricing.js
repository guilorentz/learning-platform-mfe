import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { Link as RouterLink } from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        LearnTech Portal
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const tiers = [
  {
    title: 'Plus',
    price: '109',
    description: [
      'Acesso a todos os cursos',
      'Certificados',
      'Acesso aos Desafios',
    ],
    buttonText: 'Matricule-se',
    buttonVariant: 'outlined',
  },
  {
    title: 'Pro',
    subheader: 'Recomendado',
    price: '159',
    description: [
      'Acesso a todos os cursos',
      'Certificados',
      'Acesso aos Desafios',
      'Priority email support',
    ],
    buttonText: 'Comece Agora',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: '125*',
    description: [
      '*Valor por colaborador',
      'Acesso + 1300 cursos, 300 formações e 5 mil aulas',
      'Cadastro de times e usuários',
    ],
    buttonText: 'Fale conosco',
    buttonVariant: 'outlined',
  },
];
const footers = [
  {
    title: 'Sobre Nós',
    description: [
      'Nossa Equipe',
      'História da Plataforma',
      'Fale Conosco',
      'Nossas Sedes',
    ],
  },
  {
    title: 'Recursos',
    description: [
      'Nossos Diferenciais',
      'Funcionalidades Exclusivas',
      'Recursos para Alunos e Professores',
      'Material Didático',
      'Conteúdos Extras',
    ],
  },
  {
    title: 'Materiais de Apoio',
    description: [
      'Biblioteca Educacional',
      'Conteúdos Disponíveis',
      'Material de Apoio',
      'Recursos Complementares',
    ],
  },
  {
    title: 'Jurídico',
    description: ['Política de Privacidade', 'Termos de Uso'],
  },
];

export default function Pricing() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Planos de Assinatura
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          component="p"
        >
          Escolha a sua assinatura na LearnTech e acesse um universo de
          conhecimento em tecnologia. Cursos diversos, certificados reconhecidos
          e opções adaptáveis para o seu aprendizado. Seu futuro tech começa
          aqui
        </Typography>
      </Container>
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      R${tier.price}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      /mês
                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button
                    component={RouterLink}
                    to="/auth/signup"
                    fullWidth
                    color="primary"
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="textSecondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </React.Fragment>
  );
}
