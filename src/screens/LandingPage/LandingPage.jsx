import Copyright from "./_components/Copyright";
import Recursos from "./_components/Recursos";
import Saludo from "./_components/Saludo";
import Temas from "./_components/Temas";
import Titulo from "./_components/Titulo";

const temas = [
    { descripcion: 'Componentes funcionales y de clase '  },
    { descripcion: 'Uso de React hooks como useState y useEffect' },
    { descripcion: 'Creacion de custom hooks useForm' },
    { descripcion: 'Gestion de Variables de estado con useState' },
    { descripcion: 'Gestion de estado global con Redux' },
    { descripcion: 'Integracion de Redux con React' },
    { descripcion: 'Manejo de formularios en React' },
    { descripcion: 'Publicando nuestra pagina con GitHub Pages ' }
]

const LandingPage = () => {
    return (
        <div className="LP-contenedor">
            <Titulo />
            <Saludo />
            <Temas temas={temas} />
            <Recursos />
            <Copyright />
        </div>
    );
}
export default LandingPage;