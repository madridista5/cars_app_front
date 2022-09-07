import React from "react";

interface Props {
    title: string;
    subtitle: string;
}

export const SingleAward = (props: Props) => {
    const {title, subtitle} = props;

    return (
        <div className="app__laurels_awards-card">
            <div className="app__laurels_awards-card-content">
                <p className="p__cormorant" style={{color: 'var(--color-blue)'}}>{title}</p>
                <p className="p__cormorant">{subtitle}</p>
            </div>
        </div>
    );
};