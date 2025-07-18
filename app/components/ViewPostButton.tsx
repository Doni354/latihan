'use client';

import React from "react";

interface ViewUserID {
    UserId: number
}
const ViewPostButton: React.FC<ViewUserID> = ({UserId}) => {
    const handeClick = () => alert(`User ID : ${UserId}`);
    return(
        <>
        <button onClick={handeClick}>Lihat Postingan</button>
        </>
    );
};

export default ViewPostButton