import s from "./Profile.module.scss";
import React from "react";

export const ProfileInfo = () => {
    return (
        <div className={s.info}>
            <div className={s.userName}>Name:</div>
            <div className={s.userName}>E-mail:</div>
        </div>
    )

}