import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';

export default function Header(params) {
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon/>
        <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />
      </div>
      <div className="header__right">
        <Avatar src="/images/ava.jpg"/>
        <h4>Murad</h4>
      </div>
    </div>
  );
}
