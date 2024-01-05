import React, {useEffect, useState} from "react";
import AuthAxios from "../../../../utils/axios/AuthAxios";
import {CAvatar, CBadge, CButton, CCardBody, CCollapse, CSmartTable} from "@coreui/react-pro";
import GifticonModify from "./GifticonModify";
import GifticonAdd from "./GifticonAdd";
import MissionAdd from "../mission/MissionAdd";

const Gifticon = () => {
    const [details, setDetails] = useState([]);
    const [gifticons, setGifticons] = useState([]);
    const columns = [
        {
            key: 'name',
            _style: { width: '20%' },
        },
        {
            key: 'price',
            label: 'price',
            _style: { width: '20%' },
        },
        {
            key: 'remains',
            _style: { width: '20%' },
        },
        {
            key: 'barcode',
            _style: { width: '20%' }
        },
        {
            key : 'image',
            _style: { width: '20%' }
        },
        {
            key: 'show_details',
            label: '',
            _style: { width: '1%' },
            filter: false,
            sorter: false,
        },
    ]
    const fetchGifticons = () => {
        AuthAxios.get(`/api/gifticons`)
            .then((response) => {
                setGifticons(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log('Error fetching data from API: ', error);
            })
    }

    const deleteGifticon = async (gifticonId) => {
        try {
            await AuthAxios.delete(`/api/gifticons/${gifticonId}`);
            setGifticons(gifticons.filter(gifticon => gifticon.gifticonId !== gifticonId));
        } catch (error) {
            console.log('기프티콘 삭제 중 오류 발생: ', error);
        }
    }

    const handleDeleteClick = (gifticonId) => {
        const confirmDelete = window.confirm("정말 삭제하시겠습니가?");

        if (confirmDelete) {
            deleteGifticon(gifticonId);
        }
    };

    const handleUpdateGifticon = () => {
        fetchGifticons();
    }



    const toggleDetails = (index) => {
        const position = details.indexOf(index);
        let newDetails = details.slice();
        if (position !== -1) {
            newDetails.splice(position, 1);
        } else {
            newDetails = [...details, index];
        }
        setDetails(newDetails);
    }

    useEffect(() => {
        fetchGifticons();
    }, []);

    return (
        <>
        <CSmartTable
            activePage={1}
            cleaner
            clickableRows
            columns={columns}
            columnFilter
            columnSorter
            footer
            items={gifticons}
            itemsPerPageSelect
            itemsPerPage={5}

            pagination
            onFilteredItemsChange={(items) => {
                console.log(items)
            }}
            onSelectedItemsChange={(items) => {
                console.log(items)
            }}
            scopedColumns={{
                name : (item) => (
                    <td>
                        {item.name}
                    </td>
                ),
                price : (item) => (
                    <td>
                        {item.price}
                    </td>
                ),
                remains: (item) => (
                    <td>
                        {item.remains}
                    </td>
                ),
                barcode: (item) => (
                    <td>
                        <CAvatar src={item.barcode}></CAvatar>
                    </td>
                ),
                image: (item) => (
                    <td>
                        <CAvatar src={item.image}></CAvatar>
                    </td>
                ),
                show_details: (item) => {
                    return (
                        <td className="py-2">
                            <CButton
                                color="primary"
                                variant="outline"
                                shape="square"
                                size="sm"
                                onClick={() => {
                                    toggleDetails(item.gifticonId)
                                }}
                            >
                                {details.includes(item.gifticonId) ? 'Hide' : 'Show'}
                            </CButton>
                        </td>
                    )
                },
                details: (item) => {
                    return (
                        <CCollapse visible={details.includes(item.gifticonId)}>
                            <img src={item.image} />
                            <CCardBody className="p-3">
                                <h4>{item.name}</h4>
                                <p className="text-muted">가격 : {item.price}</p>
                                <p className="text-muted">남은 수량 : {item.remains}</p>
                                <GifticonModify gifticonId={item.gifticonId} onUpdate={handleUpdateGifticon}/>
                                <CButton size="sm" color="danger" className="ml-1" style={{color:'white'}}
                                         onClick={() => handleDeleteClick(item.gifticonId)}
                                >
                                    삭제
                                </CButton>
                            </CCardBody>
                        </CCollapse>
                    )
                },
            }}
            selectable
            tableFilter
            tableProps={{
                className: 'add-this-class',
                responsive: true,
                striped: true,
                hover: true,
            }}
            tableBodyProps={{
                className: 'align-middle'
            }}
        />
        <GifticonAdd onUpdate={handleUpdateGifticon} />
        </>
    );
}

export default Gifticon;