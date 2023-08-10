import React, { useEffect, useState } from 'react';
import { AlignLeftOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { listCategory } from '../../../Model/api/Category';

const CelectCategory = () => {
    const [getCategory, setCategory] = useState<any>([])

    useEffect(() => {
        getDataCategory()
    }, [])

    const getDataCategory = async () => {
        const { data } = await listCategory()
        setCategory(data)
    }

    const items: MenuProps['items'] = [
        {
            label: 'Category',
            key: 'SubMenu',
            icon: <AlignLeftOutlined />,
            children: [
                {
                    label: (
                        <a href={`/category/${getCategory[0]?.id}`}> {getCategory[0]?.name}  </a>
                    ),
                    key: `${getCategory[0]?.id}`,
                },
                {
                    label: (
                        <a href={`/category/${getCategory[1]?.id}`}> {getCategory[1]?.name}  </a>
                    ),
                    key: `${getCategory[1]?.id}`,
                },
                {
                    label: (
                        <a href={`/category/${getCategory[2]?.id}`}> {getCategory[2]?.name}  </a>
                    ),
                    key: `${getCategory[2]?.id}`,
                },
            ],
        },

    ];

    return (
        <Menu mode="horizontal" items={items} style={{ fontSize: "22px", }} />
    )
}

export default CelectCategory