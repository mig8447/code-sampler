import { Navbar, Container, Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Link from "next/link";
import Style from '../../styles/Navbar.module.css';
import GenerateModal from '../UI/GenerateModal/GenerateModal';
import SelectBadges from '../UI/SelectBadges/SelectBadges';
import LanguageFilter from './LanguageFilter/LanguageFilter';
import { languageIndex } from '../../search/language-index';
import ToggleButton from './ToggleTheme/ToggleTheme';
import lunr from 'lunr';

const NavbarComponent = () => {
    const [show, setShow] = useState(false);
    const [query, setQuery] = useState("");
    const [languageResults, setLanguageResults] = useState([]);
    const [preferredLanguages, setPreferredLanguages] = useState();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const idx = lunr(function () {
        this.ref('id')
        this.field('name')

        languageIndex.forEach(function (doc) {
            this.add(doc);
        }, this);
    });

    const onChangeQuery = (event) => {
        const query = event.target.value;
        setQuery(query);
        setLanguageResults(idx.query((q) => {
            q.term(query, {editDistance: 2})
        }));
        
    }


  const deleteKeyFromObject = (key) => {
    const { [key]: tmp, ...rest } = preferredLanguages
    console.log(rest)
    setPreferredLanguages(rest);
    localStorage.setItem("preferredLanguages", JSON.stringify(rest));
  }

  const onClickBadge = (selected, language) => {
    
    if (selected) {
      deleteKeyFromObject(language);
    } else {
      let newPreferredLanguages = { ...preferredLanguages }
      newPreferredLanguages[language] = true;
      setPreferredLanguages(newPreferredLanguages)
      localStorage.setItem("preferredLanguages", JSON.stringify(newPreferredLanguages));
    }
  }

    useEffect(() => {
        setLanguageResults(idx.search(`* *`));
        setPreferredLanguages(JSON.parse(localStorage.getItem("preferredLanguages")));
    }, [])


    return (
        <>
            <Navbar className={Style.navbarColor}>
                
                    <Navbar.Brand className={"text-white ml-3 btn"}>
                        <Link href={"/"} >  
                        <h6 className={"mb-1"}>Code Sampler</h6>
                        </Link>
                    </Navbar.Brand>
               
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end ">
                    <div className={Style.iconContainer}>
                        <Link href={"/favorites"} >
                            <span className="fa fa-bookmark-o fa-lg " aria-hidden="true"></span>
                        </Link>
                    </div>
                    <div className={Style.iconContainer}>
                        <button onClick={handleShow} style={{ background: "none", border: "none" }} className=" fa fa-gear fa-lg text-light" aria-hidden="true"></button>
                    </div>
                </Navbar.Collapse>
            </Navbar>
            <GenerateModal show={show} handleClose={handleClose} title={"Settings"} >
                <h6>Preferred languages</h6>
                <LanguageFilter query={query} setQuery={onChangeQuery} />
                <Container fluid className="mt-2">
                    {languageResults.map(lang => (
                        <SelectBadges key={lang.ref} 
                        label={lang.ref} 
                        selected={preferredLanguages && preferredLanguages[lang.ref]} 
                        onClickHandler={onClickBadge} 
                        />
                    ))}
                </Container>
                <h6>Preferred code theme</h6>
                <Container fluid className="mt-2">
                    <ToggleButton />
                </Container>

            </GenerateModal>
        </>
    )
}

export default NavbarComponent;