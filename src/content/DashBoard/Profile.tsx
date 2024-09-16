import { List } from "flowbite-react";

function Profile() {
  const storedData = JSON.parse(sessionStorage.getItem("userStats")!);
  const data = storedData[0];

  return (
    <List
      unstyled
      className="max-w-md divide-y divide-gray-200 dark:divide-gray-700"
    >
      <List.Item className="pb-3 sm:pb-4">
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
              Benutzername
            </p>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            {data.username}
          </div>
        </div>
      </List.Item>
      <List.Item className="py-3 sm:py-4">
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
              Besuche
            </p>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            {data.visits}
          </div>
        </div>
      </List.Item>
      <List.Item className="py-3 sm:py-4">
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
              Gestete Passwörter
            </p>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            {data.tested_passwords}
          </div>
        </div>
      </List.Item>
      <List.Item className="py-3 sm:py-4">
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
              Generierte Passwörter
            </p>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            {data.generated_passwords}
          </div>
        </div>
      </List.Item>
      <List.Item className="pb-0 pt-3 sm:pt-4">
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
              Generierte Benutzernamen
            </p>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            {data.generated_usernames}
          </div>
        </div>
      </List.Item>
    </List>
  );
}

export default Profile;
