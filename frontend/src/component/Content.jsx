import Card from "./Card";
import { Link } from "react-router-dom";


export default function Content(){
    return(<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-20">
        

        <Link to={'/admissionPage'}>
            <Card name="Admission" />
        </Link>

        <Link to={'/libraryPage'}>
            <Card name="Library" />
        </Link>
        
        <Link to={'/transportPage'}>
            <Card name="Transport" />
        </Link>
        
        <Link to={'/researchPage'}>
            <Card name="Research" />
        </Link>
        
        <Link to={'/hostelPage'}>
            <Card name="Hostel" />
        </Link>
        
        <Link to={'/eventPage'}>
            <Card name="Event" />
        </Link>
        
        <Link to={'/placementPage'}>
            <Card name="Placement" />
        </Link>
        
        <Link to={'/ExaminationPage'}>
            <Card name="Examination" />
        </Link>

        <Link to={'/financeHome'}>
            <Card name="Finance" />
        </Link>

        
    </div>)
}