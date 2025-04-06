
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom'; // Or appropriate router hooks
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "./ui/dropdown-menu";

const ChangeLang = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate()
  const location = useLocation();

  const setLang = (lang:string) => {
    // Change the language in i18next
    i18n.changeLanguage(lang).then(() => {
      // Update the URL with the new language parameter
      const searchParams = new URLSearchParams(location.search);
      searchParams.set('lng', lang);
      navigate({ search: searchParams.toString() });
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <span>{i18n.language.toUpperCase()}</span> {/* Show the currently selected language */}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLang("tr")}>
          Turkish 
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLang("es")}>
          Spanish
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLang("en")}>
        English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ChangeLang;