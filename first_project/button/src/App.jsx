import Student from './Student.jsx'

function App() {
    return(
        <>
            <Student name="Giovanni Trapattoni" age={30} isStudent={true}/>
            <Student name="Franz Beckenbauer" age={25} isStudent={false}/>
            <Student name="Rudi Voeller" age={27} isStudent={true}/>
            <Student name="Sandra Müller" age={19} isStudent={true}/>
            <Student />
        </>
    );
}

export default App
