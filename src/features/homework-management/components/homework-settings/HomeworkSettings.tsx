import { Card, Input } from '@components';

const HomeWorkSettings = () => {
  const getlabel = (label: string) => (
    <div className="mb-2 text-base font-normal">{label}</div>
  );

  return (
    <div className="w-full rounded-lg bg-theme p-6">
      <div className="mb-5 text-base font-bold">HomeWork Settings</div>
      <div className="mb-5  flex gap-16">
        <div className="basis-1/2">
          <div className="">{getlabel('Assessment Title')}</div>
          <Input />
        </div>
        <div className="basis-1/2" />
      </div>
      <div className="mb-5  flex gap-16">
        <div className="basis-1/2">
          <div className="">{getlabel('Select Level')}</div>
          <div className="flex gap-2">
            {[4, 5, 6].map((value) => (
              <Card
                value={String(value)}
                handleSelect={() => {}}
                isSelected={value === 5}
              />
            ))}
          </div>
        </div>
        <div className="basis-1/2">
          <div className="">{getlabel('Select Subject')}</div>
          <div className="flex gap-2">
            {['Maths'].map((value) => (
              <Card value={value} handleSelect={() => {}} isSelected />
            ))}
          </div>
        </div>
      </div>
      <div className="mb-5  flex gap-16">
        <div className="basis-1/2">
          <div className="">{getlabel('Select Topic')}</div>
          <div className="flex gap-2">dropdown</div>
        </div>
        <div className="basis-1/2">
          <div className="">{getlabel('Select Skill')}</div>
          <div className="flex gap-2">dropdown</div>
        </div>
      </div>
      <div className="mb-5  flex gap-16">
        <div className="basis-1/2">
          <div className="">{getlabel('Homework start date')}</div>
          <div className="flex gap-2">dropdown</div>
        </div>
        <div className="basis-1/2">
          <div className="">{getlabel('Homework end date')}</div>
          <div className="flex gap-2">dropdown</div>
        </div>
      </div>
      <div className="flex w-full justify-end gap-4">
        <div>cancel</div>
        <div>Generate homework</div>
      </div>
    </div>
  );
};

export default HomeWorkSettings;
