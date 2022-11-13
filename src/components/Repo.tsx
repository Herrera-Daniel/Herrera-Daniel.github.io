import React from "preact/compat";
import {RepoModel} from "../domain/RepoModel";
import './Repo.css';
import {IoEye, IoGitNetwork, IoStar} from "react-icons/all";

type RepoProps = {
    repo: RepoModel;
}

export const Repo = (props: RepoProps) => {
    const onClick = (event) => {
        console.log(event.target);
        const currentTarget = event.currentTarget;
        if (currentTarget.getAttribute('data-clicked') === 'false') {
            event.currentTarget.setAttribute('data-clicked', 'true');
        }
        else {
            event.currentTarget.setAttribute('data-clicked', 'false');
        }
    }
    return (
        <div
            id={props.repo.id}
            data-clicked='false'
            onClick={onClick}
            class='repoContainer'
        >
            <a class='repoLink' href={props.repo.href}>{props.repo.name}</a>
            <div id={`${props.repo.id}RepoDesc`} class='repoDesc'>
                <div>
                    {props.repo.description}
                </div>
            </div>
            <div class='repoDetailsContainer'>
                <p><IoGitNetwork/> {props.repo.forksCount}</p>
                <p><IoStar/> {props.repo.starsCount}</p>
                <p><IoEye/> {props.repo.watchCount}</p>
            </div>
        </div>
    )
}
