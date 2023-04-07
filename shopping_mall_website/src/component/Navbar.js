import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ authenticate, setAuthenticate }) => {
  const menuList = [
    '여성',
    'Divided',
    '남성',
    '신생아/유아',
    '아동',
    'H&M Home',
    'Sale',
    '지속가능성',
  ];
  const navigate = useNavigate();

  const goToSignInPage = () => {
    navigate('/signin');
  };

  const search = (event) => {
    if (event.key === 'Enter') {
      const keyword = event.target.value;
      navigate(`?q=${keyword}`);
    }
  };

  const reverseAuthenticate = () => {
    setAuthenticate(!authenticate);
  };

  return (
    <div>
      <div>
        <div className='signInWrap' onClick={goToSignInPage}>
          <FontAwesomeIcon icon={faUser} />
          {authenticate ? (
            <div onClick={reverseAuthenticate}>로그아웃</div>
          ) : (
            <div>로그인</div>
          )}
        </div>
      </div>
      <div className='logoWrap'>
        <img
          width={100}
          src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEX////WABzUAADWABnVABPWABbVAAjVAA3SAADVABHVAAz66OnVAAb44uP77u/us7bxwcPkf4Tyx8naND/rpan33t/22dv++vrpmp70z9HolZnaOUThbnTtrrHbQUr88/TcSlPlhYrdUlrvubznkJTgY2rYJzTYHi3hanDjdXvZLDnzy83eWF/XEiXcSFHke4DX8HMgAAAL+ElEQVR4nO1ca0PyOgxmHVcRRLmJiCheEAX9///urGm3Nell8Lruy8nz6T3SM5q1fZI8SWm1GAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwG43+L4d245icua37enzB6OwnRH507fFs5YjzbCSFu/jSpy7DYibVvXsvNVIg0ScTsnCdt75+yua+CYyaZeYMkScWl0/x33PQHiXh0fTLaHIXoJBLnvPL5uxDtJBl8+IcsHhJpHjyxsY266Gdf136yPxieRD6bbD7ziscsb35ET4/1jXkTsB8qRtWOvVykq0/r70u5HjnSU/ghrztRDvfNfV2alySd9d+nfh4mwrMJH0Q5nUQ8hJ4xP5WLnb2NjnvU0Xxgcn1by/TPwE7OzXXsu6lp4TDwiJE+q7mFe+eoV2RgIl7rmX8lxsLzQtGEBs+hZ0zbaO6e/YfeWGZh3R7Whze1SW1vNzXXJfjCF3hxksHRNeoej0rTuiyoAhx+B5OiaYd9120XW3jl9DwiPWNQBKi96FiizytjOt0gK5C5J+LFMWhGFlps6jKhAj9t9xJt0YSCznBC5u4Of3r0NSxqsyGIkfC8dOQqOl+hZxwHCZm849BurNdQmw1hvFzDt9muALuK0I7a0rknrrg0IUsYJucaoXjmx/o79l3BCNJaHdcLu7GW8K1GKwK48fHM2vRwYdpbtxM6e/uFnDp0zKQ+Kypn5+CZOV7CUDY0tJbQccRe7XVuxt8rQxwb5mB6uI47CNO4tybfmVqDPugSpkl9VoSgXLV9bJZ4CYO5rzX5pPdOx9xZb6FnpzJRAF/sYDXsnUVIlpjbm/Ta8j2Oo3qWYvBnKBZ0nPmTSe32kph4cxxDOvuVY0wz/h5iawfPfOMl/A4945Tas6ev7JmGBE35ey/PoCAlnAPQtMK1Po4xDeX3vx6eGeMlDCb3Ly4Lybl971lDwpF8bVA8Y8cz+GiFHVfH3qR0ByqHSbLfRrTSjS+eQSGpO5vN4dqkdAceZBqWfiETHQl3BPh4BidD4ehKBe4YxNWN9WlHWXIjRLPw5U0/iGe6wYcMXJsUUxe8hKvbX/MwDna1muKBj2dwnBlOAbSjC50xFR6JLfIqzSQW8M0OfQazY1BE1Ju0Tc4YitMhbM2Chgu2fk3w5k1IdHFkjiZAmeisH5FHx+QLjxOj7wv4uSb4eIakvkHVVm1SMduhsBM9Ewg7O3YoA0mvazbGBRXP2DFy68mcbUUBTEsgW6Ss4twJjl+2b5HXD0e6NUHnTZaENrqktNCGTfqFGRU5C/A87bUeWqzyfd3mOKB4xo4OsYMLV9S0v7lv+dkX0qaMV0ggeFe3OTZufPUmxDOOZN1ErtORfNl4KBxUKRHgFDiYcNYEddoqeSYsS6d6k5IFMpzFsaefgommAQVDnbbur/UBzuTUG9h6qL3YpAufJ4DgAdgKE00DCoby6naejeOZdPpynAoJZwhSFK3IFixHAJ0BrWCiaUDBgNPWsfsJiCSRdgcqO3LGIOAI5CFDaq9RANAB29IqgoRbNeqArmtbr3LoyvZ8b10rBA9EtzJ8HRw+cDhkleP3YEBdG33RdjU7TAWtkpVzcuhGqnQj/QmKZI0dDW4SAltENGH5tRYo7sul+u3d/XuanbWupXuWs3ZlwaCTQofGo1lpLPn3VRRLiojm6hDdwoecZ5ar2ac0jpb2qIGuyGZYyliIgEtlDmI5tfpJw0SjTtvgZVptnFwmdwRyX9LxHs0/1yfAh7QhZiBEE10qzROZwLY8Y0Jr2KQD+U+3s4CdqXKTb587iYLFbHqeZfl83MmqOssgCqKgLe3pAbBuunVo5nEnMaw7CiEuM9DVdFBMGg4dChOKlBlcq04iEBU5Iql6MNy8CyFseT2Mti/2fi4bqVBVoiimqtxeOSR8UKP0YNzdns4hFRs+uWFpOJxXlzuEOEcv1zIy0QxlP273H6zL0PcpRjdG1QqdsnyFlKtQvLqKSjTDn8u3Zo6eXxJTLlxNFgWz+n9ZaHmmZb2Cipzzcgi7KnIe0q7Y+RUxmLMOQXFIsyj/ljvSX1Purp1ovKFmGFdCHALnBbWk7lBIA28FTl7Rc4tbAOsmGtpNdqaBj2E6gGJLLkagQr7auBDwFNFZZKL5FNeXL2OVYov6jBw8AnFoTinz2BHN/OUyH59Ud2TlSjD8x9IOWCAdLIqgOEGOUvzdJkET054QuFeiqn6JmuGQDqXoE6rkRQiOBMpIxd+xl2/aMor7nM29uvxo5SjNJKYIgnQoEJnA5rK2/Gw+O1bxd9W3jet0M+ue3ybyyOGoo1ukqJtBNuZEaxe4wwEpFLBEkH+WvhQfw6pbG/+KV2yinPj+sCm+jXQI5UrRLax9SqU2IzVskWMGQ2V4WF5IGMYmGo2JKNxultUfH76R7Iw8ViHYSq/XkVusjxlela3yNAkHbTPtLMvSxCQ+0SiMD0IXbO0uAVyOKdpLMkfX+Xju0hTKSA0lcNC20RFAKdw/WLs4HibC8yWkvWRYWCKr+D9t0l+qezhybQPFZFlODy/AkLWRChW5y+QBnR8DSCgqCt8ZochWk2xP4oOoOqawWlFYcKdT35X74dGIRqHjUbpJ3SF/zRlFZIPlMcMitRl1t6jStgKV1PiSbUNEI/HtUbpbt7hmWAjF0ja5JXGZkV4Ew3H1HJyHEV6vmiKaVp7lOGp3wlPClftPzg/fj1Xtw+VjcBvJUEls5fBZg0QDX+Vo4iJaX6mO6iZ8UpOmt4hI5mCoFwBMRFGJxhQeEA5mBmv2JqgjdPWMRi/oXkcW9qD1yeSTNd7EdVtlwnf9B0/R7M6Axe20caXIuupGCnIJObfNEc3Y5wxJo175lhfUFkBZkFHAIa21F0fNEQ0OJg18mv7MqHyNVFBKrv/qTsNypV0WGuNfmyMauM7sKt3hJSxYZasZlrwTHdCUDtK+9YSacPBd4pgX8oq2AgrSfVHIF3s4tipbmB2LqR3ppWHHvS6TTnDEE7PqpLy6Q39BUygb9XZyfJp25LI/iV4/z4NRcVXCshDHBzhmi2Obnpn8Jpf+gpcwXyt9s3ScufP2R698+yrdNfv5rHOIfB4WceoWg01479x7buEpsWwGJXpTN9PtcKYDsSw0H49C3mhVJwlThUf4dPYMKk/4VSiBBXem9lYgFmIzNk0RzdI6Ps75FQHPSx4+qzUoLpXMHcE7UbkwmyCdLSbR3JT1TAzi7vM/A2N2X7Y6NS5UDF0XRfLbF5IqSYUXK/4RLMuh6pkD+wNcnS00NtXY19W6R3lrBoRB4lTxPWeSnKFf+ohY3s6vPNifoC1W+vEjqlgVgduSBjQS+OcGcL/Ttimi0ZvLDuxR4lSoZyQSKaPxCQ1oJBCZkLbDVVNEA0fFtUkQERhpxbCUVwftMoTRVzTwM7amFEuOOqbSeEQz8skXivxdM7jNpyZ2u3bxCQy3ukNvSzPoTT6kj0QkGq2x2fIFqnvhLOJdNjZ0REYyd/1U78uRFdAo7MvfFiJH3VSpHBJYbTj5IjbUMkjuGU6OQny9bWGUVj5mnjc1Lsp39IaNSWQRG/YWvogN362ovjAHfsH5i1naEvoZotKIDXu62md/gCZwxibyJWBlcEfeIopKI3YGD5z80KKtPpW3PL59PqdV5Byk+ReXpaJ1Bq9wmcEAFvqCl9QkIITz/YyXjGStH0Qz6yERO4Mh5nBeYDJ9xRm5G4jbXqklHSR9urxm4hLxR5OABVwTG17GA1uf3qqf9tG3YhZT8I9HNCtXpAVAQl/1jUAdsl3y3XvTwmhEA07MfQjWpT923PFyPuiye3Wmv41310m1Jzn3ltGiccYeghizf1ls+VuYWPWzi3+A5HjhCSfmRR/NGddWh/00dXbth/Cahzsx7zod+v7ffRjvlcNwBSoWbkTvcrYY7lWOHfVSZdDT7rx5R114UilX8AdSogJ+cTPq3eppLyrRVGPdO4dJ/4DlVZZEX8X8hgpshejHvS43SkS/ibvNftT+U90WVg39RiKDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWBEx3/Rj5Dq2NoPVgAAAABJRU5ErkJggg=='
        />
      </div>
      <div className='menuContainer'>
        <ul className='menuWrap'>
          {menuList.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
        <div className='searchWrap'>
          <FontAwesomeIcon icon={faSearch} />
          <input
            placeholder='제품 검색'
            type='text'
            onKeyDown={(event) => search(event)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
