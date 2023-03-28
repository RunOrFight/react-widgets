import React, { Dispatch, FC, useState } from "react";
import { Button } from ".";

interface TabbarProps {
    tabs: { id: string; caption: string }[];
    activeTab: string;
    setActiveTab: Dispatch<React.SetStateAction<string>>;
}

const Tabbar: FC<TabbarProps> = ({ tabs, activeTab, setActiveTab }) => {
    return (
        <div className='flex gap-2'>
            {tabs?.map((tab) => (
                <Button
                    style={{
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0
                    }}
                    onClick={() => setActiveTab(tab.id)}
                    key={`tab_${tab.id}`}
                    variant={activeTab === tab.id ? "active" : undefined}>
                    {tab.caption}
                </Button>
            ))}
        </div>
    );
};

export default Tabbar;
