import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import MaterialLink from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  '@global': {
    a: {
      textDecoration: 'none',
    },
  },
  section: {
    marginTop: '32px',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%',
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const enrolledCourses = [
  {
    image: 'https://source.unsplash.com/random',
    title: 'Curso 1',
    description: 'Descrição do curso 1',
  },
  {
    image: 'https://source.unsplash.com/random',
    title: 'Curso 2',
    description: 'Descrição do curso 2',
  },
];

const achievedCertificates = [
  {
    image: 'https://source.unsplash.com/random',
    title: 'Certificado 1',
  },
  {
    image: 'https://source.unsplash.com/random',
    title: 'Certificado 2',
  },
];

const MemberArea = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main>
        <Container maxWidth="md">
          <Typography variant="h4" gutterBottom className={classes.section}>
            Cursos Matriculados
          </Typography>
          <Grid container spacing={4}>
            {enrolledCourses.map((course, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={course.image}
                    title={course.title}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h6" component="h2">
                      {course.title}
                    </Typography>
                    <Typography>{course.description}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      component={Link}
                      to={`/courses/${index}`}
                    >
                      Ver curso
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Typography variant="h4" gutterBottom className={classes.section}>
            Certificados obtidos
          </Typography>
          <Grid container spacing={4}>
            {achievedCertificates.map((certificate, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={certificate.image}
                    title={certificate.title}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h6" component="h2">
                      {certificate.title}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Ver Certificado
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          LearnTech Portal
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Conhecimento em Tecnologia ao seu Alcance
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © '}
          <MaterialLink to="/" color="inherit">
            LearnTech Portal
          </MaterialLink>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </footer>
    </React.Fragment>
  );
};

export default MemberArea;
