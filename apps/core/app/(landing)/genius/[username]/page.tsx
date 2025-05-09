import { Avatar, AvatarImage } from '@repo/ui/components';
import Image from 'next/image';
import {Typography} from '@repo/ui/components';
import { TabProvider, TabList, TabTrigger, TabContent } from '@repo/ui/components';
import { ProductCard } from '@repo/ui/components';
import { ProductList } from '../../_constant/mock-product-list';
import { Chip } from '@repo/ui/components';

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Cover Image */}
      <div className="relative z-0  w-full h-[400px] sm:h-[400px] md:h-[400px]">
        <Image
          src="/images/profile-image.jpg"
          alt="Profile Cover"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90" />
      </div>
      <div className='container relative -mt-20 sm:-mt-24 md:-mt-44 mx-auto z-10 '>
      <div className=" flex flex-row gap-2 items-center">
        <div className='flex flex-col items-center justify-center pb-6'>
        <Avatar className="w-32 h-32 border-4 border-background shadow-lg">
          <AvatarImage className="rounded-xl" sizes="128px" src="/images/ali.png" />
        </Avatar>
        </div>
        <div className='flex flex-col items-start justify-start'>
        <Typography variant="heading/md" weight="medium" align="center" className="text-white">
          Ali Ebrahimi Kashef
        </Typography>
        <Typography variant="label/md" weight="light" align="center" className="text-muted-foreground pt-2">
          Product Design, Web Design
        </Typography>
       
        </div>
      </div>
      
      <TabProvider defaultValue="products">
        
          <TabList className="justify-start bg-card px-3 py-3 rounded-md">
            <TabTrigger value="products">Products</TabTrigger>
            <TabTrigger value="favorite">Favorite</TabTrigger>
            <TabTrigger value="about">About</TabTrigger>
          </TabList>

          {/* Products Tab */}
          <TabContent value="products">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
              {ProductList.map((product, idx) => (
                <ProductCard key={idx} {...product} />
              ))}
            </div>
          </TabContent>

          {/* Favorite Tab */}
          <TabContent value="favorite">
            <div className="flex flex-col items-center justify-center py-16">
              <Typography variant="heading/md" weight="bold" align="center">
                No favorites yet
              </Typography>
              <Typography variant="paragraph/md" align="center" className="text-muted-foreground mt-2">
                Products you favorite will appear here.
              </Typography>
            </div>
          </TabContent>

          {/* About Tab */}
          <TabContent value="about">
            <div className="flex flex-col items-center justify-center w-full mt-8">
              <div className="w-full bg-card rounded-xl flex flex-col md:flex-row justify-between items-start md:items-stretch p-6 gap-8">
                {/* Biography */}
                <div className="flex-1 min-w-0">
                  <Typography variant="heading/sm" weight="bold" className="mb-2 text-white">
                    Biography
                  </Typography>
                  <Typography variant="paragraph/md" className="text-muted-foreground">
                    A freelance graphic and UI/UX designer. I specialise in Web Design, logo and brand development, motion graphics, and offer design services to business of all sizes.
                  </Typography>
                </div>
                {/* Skills */}
                <div className="flex flex-col min-w-[220px]">
                  <Typography variant="heading/sm" weight="bold" className="mb-2 text-white">
                    Skills
                  </Typography>
                  <div className="flex flex-wrap gap-2">
                    {['UI/UX', 'Logo', 'Vector', 'web design', 'Animation'].map(skill => (
                      <Chip key={skill} variant="secondary" className="bg-black text-white font-medium px-4 py-2 rounded-md">
                        {skill}
                      </Chip>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </TabContent>
        </TabProvider>

      </div>

      {/* Profile Info */}
    
    </div>
  );
};

export default ProfilePage;
