import React from 'react'
import '../css/style.css'
import { NavLink } from 'react-router-dom'
export default function Header() {
    return (
        <div >
            <header className="header container-fluid-md" style={{ background: '#fcc407' }} >
                {/* <div className="header__top">
                    <p className="text-end mb-0 text-white">
                        <i className="fa-solid fa-phone" />
                        <span className="mx-3 pe-3 border-end">096.105.1014</span>
                        <i className="fa-solid fa-magnifying-glass" />
                    </p>
                </div> */}
                <nav className="navbar navbar-expand-md">
                    <div className="container">
                        <div className='logo' style={{ background: "#ffc000", alignSelf: "center" }}>
                            <img src='https://zestech.vn/wp-content/themes/zestech/images/logo.png' />
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#movieCyber" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon">
                                <i className="fa fa-bars" />
                            </span>
                        </button>
                        <div className="collapse navbar-collapse" id="movieCyber">
                            <ul className="navbar-nav my-2 my-lg-0 navbar-nav-scroll container" style={{ justifyContent: "flex-end" }} >
                                <li className="nav-item line active">
                                    <NavLink className="nav-link "
                                        to="/DemoReact/home"
                                    >
                                        <i class="fa fa-home"></i> TRANG CHỦ
                                    </NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink className="nav-link "
                                        to=""
                                    >
                                        GIỚI THIỆU
                                    </NavLink>
                                </li>
                                <li className="nav-item line">
                                    <a className="nav-link" href="">ĐẠI LÝ</a>
                                </li>
                                <li class="nav-item dropdown line">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        SẢN PHẨM
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-white" style={{ backgroundColor: 'black' }}>
                                        <li><NavLink className="nav-link dropdown-item text-white "
                                            to="/DemoReact/manhinh"
                                        >
                                            Màn Hình
                                        </NavLink></li>
                                        <li><NavLink className="nav-link dropdown-item text-white "
                                            to="/DemoReact/camera"
                                        >
                                            Camera
                                        </NavLink></li>
                                        <li><NavLink className="nav-link dropdown-item text-white "
                                            to="/DemoReact/den"
                                        >
                                            Đèn
                                        </NavLink></li>
                                    </ul>
                                </li>
                                <li className="nav-item line">
                                    <a className="nav-link" href="">CONTACT</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div >

    )
}
