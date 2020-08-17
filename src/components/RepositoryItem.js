import './RepositoryItem.scss';
import React, { useEffect, useState } from 'react';
import swift from 'programming-languages-logos/src/swift/swift.svg';
import kotlin from 'programming-languages-logos/src/kotlin/kotlin.svg';
import JavaScript from 'programming-languages-logos/src/javascript/javascript.svg';
import java from 'programming-languages-logos/src/java/java.svg';
import TypeScript from 'programming-languages-logos/src/typescript/typescript.svg';

const RepositoryItem = (props) => {

    const logos = {
        swift,
        kotlin,
        JavaScript,
        java,
        TypeScript
    };

    const [languages, setLanguages] = useState([]);

    useEffect(async () => {
        const result = await props.getLanguages(props.name)
        setLanguages(result)
    }, []);

    return(
        <div className="item">
            <p className="itemText">{props.name}</p>
            <p className="description">{props.description}</p>
            <div id="languagesDiv">
                {
                    languages.map((language) => (
                        <img className="languagesImg" src={
                            language !== "shaderlab" ?
                            `https://cdn.jsdelivr.net/npm/programming-languages-logos/src/${language}/${language}.svg` :
                                'https://upload.wikimedia.org/wikipedia/commons/1/19/Unity_Technologies_logo.svg'
                        } height="50" />
                    ))
                }
            </div>
        </div>
    );
};

export default RepositoryItem;
