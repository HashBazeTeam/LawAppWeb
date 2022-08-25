import React, { useState, useEffect } from "react";
import {
    CFormInput, CForm, CCol, CContainer, CRow,
    CCard,
    CCardBody,
    CCardTitle,
    CCardText,
    CListGroup,
    CListGroupItem,
    CCardFooter,
    CCardHeader
} from '@coreui/react'

import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Joi from "joi";
import { thunks, selectors } from "../../../store";


import {
    CustomCFormInputGroup,
    CustomCFormSelectGroup,
} from "src/components/common/CustomCInputGroup";

import { CButton } from "@coreui/react";

/**
 * Agent account add page
 * TODO: Change according to law app requirements
 */
const ProfilePage = () => {

    return (
        <>
            <div className="shadow sm:rounded-lg bg-white p-4 mb-5 row g-3">
                <CContainer>
                    <CRow>
                        <CCol xs={6}>
                            <h1>Hi! Tharindu</h1>
                            <br/>
                            <img
                                src="https://e7.pngegg.com/pngimages/613/636/png-clipart-computer-icons-user-profile-male-avatar-avatar-heroes-logo.png"
                                className=" object-cover w-full h-full mx-auto "
                                style={{
                                    width: 250,
                                    height: 250,
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    borderWidth: 3,
                                    borderColor: 'Gray',

                                }}
                            />
                            <br/><br/>
                            <div className="d-grid gap-2 col-6 mx-auto">
                            <CButton color="dark" variant="outline">Edit Profile</CButton>
                            </div>
                            
                        </CCol>
                        
                        <CCol xs={6}>
                            <div className="mx-auto">
                                <CContainer>
                                    <CCard textColor="dark"
                                        className={`mb-5 border-top-dark border-top-2 `}
                                        
                                        style={{ maxWidth: '28rem' }}
                                       >
                                        <CCardHeader className="">Profile</CCardHeader>
                                         <br/>
                                        <CCardBody className="">
                                            
                                            <CListGroup flush>
                                                <CListGroupItem></CListGroupItem>
                                                <CListGroupItem>
                                                    <CCardTitle>
                                                        Name :
                                                    </CCardTitle>
                                                    <CCardText>
                                                        Tharindu Lakshan
                                                    </CCardText>
                                                </CListGroupItem>
                                                <CListGroupItem>
                                                    <CCardText>
                                                        Email :
                                                    </CCardText>
                                                    <CCardText>
                                                        abc@gmail.com
                                                    </CCardText>
                                                </CListGroupItem>
                                                <CListGroupItem>
                                                    <CCardText>
                                                        Phone Number :
                                                    </CCardText>
                                                    <CCardText>
                                                        +94718792018
                                                    </CCardText>
                                                </CListGroupItem>
                                                <CListGroupItem>
                                                    <CCardText>
                                                        Birth day : :
                                                    </CCardText>
                                                    <CCardText>
                                                        09-06-1992
                                                    </CCardText>
                                                </CListGroupItem>
                                            </CListGroup>

                                            <CCardText>
                                               
                                            </CCardText>

                                        </CCardBody>
                                        <CCardFooter>Admin</CCardFooter>
                                    </CCard>
                                </CContainer>
                            </div>

                        </CCol>

                    </CRow>


                </CContainer>

            </div>
        </>
    );
};

export default ProfilePage;

const initialValue = {
    fullName: "",
    email: "",
    phoneNumber: "",
    country: "",
};
