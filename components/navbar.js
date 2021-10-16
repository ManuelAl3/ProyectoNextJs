export default function Nabvar() {
    return(
        <div className="sidebar">
            <div className="logo-details">
                <i className='bx bxl-c-plus-plus icon'></i>
                <div className="logo_name">Unipoli ISW</div>
                <i className='bx bx-menu' id="btn"></i>
            </div>
            <ul className="nav-list">
                <li>
                    <i className='bx bx-search'></i>
                    <input type="text" placeholder="Search..." />
                    <span class ="tooltip">Buscar</span>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-grid-alt'></i>
                        <span className="links_name">Dashboard</span>
                    </a>
                    <span className="tooltip">Dashboard</span>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-user'></i>
                        <span className="links_name">User</span>
                    </a>
                    <span className="tooltip">User</span>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-pie-chart-alt-2'></i>
                        <span className="links_name">Analytics</span>
                    </a>
                    <span className="tooltip">Analytics</span>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-folder'></i>
                        <span className="links_name">File Manager</span>
                    </a>
                    <span className="tooltip">Files</span>
                </li>
                <li className="profile">
                    <div className="profile-details">
                        <img src="../../public/images/profile.jpg" alt="profileImg" />
                        <div class ="name_job">
                        <div class ="name">Manuel Alberto</div>
                        <div class ="job">Alumno</div>
                        </div>
                    </div>
                    <i className='bx bx-log-out' id="log_out"></i>
                </li>
            </ul>
        </div>
    );
}