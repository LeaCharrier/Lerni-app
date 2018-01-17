<?php

namespace LerniBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Facts
 *
 * @ORM\Table(name="facts")
 * @ORM\Entity(repositoryClass="LerniBundle\Repository\FactsRepository")
 */
class Facts
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string|null
     *
     * @ORM\Column(name="description", type="string", length=255, nullable=true)
     */
    private $description;

    /**
     * @var string
     *
     * @ORM\Column(name="interest", type="string", length=255)
     */
    private $interest;

    /**
     * @ORM\ManyToOne(targetEntity="LerniBundle\Entity\Countries", inversedBy="facts", cascade={"remove"})
     */
    private $country;

    /**
     * @ORM\ManyToOne(targetEntity="LerniBundle\Entity\Category", inversedBy="facts" ,  cascade={"remove"})
     */
    private $categories;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $picture;



    /**
     * Get id.
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set description.
     *
     * @param string|null $description
     *
     * @return Facts
     */
    public function setDescription($description = null)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get description.
     *
     * @return string|null
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Set interest.
     *
     * @param string $interest
     *
     * @return Facts
     */
    public function setInterest($interest)
    {
        $this->interest = $interest;

        return $this;
    }

    /**
     * Get interest.
     *
     * @return string
     */
    public function getInterest()
    {
        return $this->interest;
    }

    /**
     * Set picture.
     *
     * @param string $picture
     *
     * @return Facts
     */
    public function setPicture($picture)
    {
        $this->picture = $picture;

        return $this;
    }

    /**
     * Get picture.
     *
     * @return string
     */
    public function getPicture()
    {
        return $this->picture;
    }

    /**
     * Set country.
     *
     * @param \LerniBundle\Entity\Countries|null $country
     *
     * @return Facts
     */
    public function setCountry(\LerniBundle\Entity\Countries $country = null)
    {
        $this->country = $country;

        return $this;
    }

    /**
     * Get country.
     *
     * @return \LerniBundle\Entity\Countries|null
     */
    public function getCountry()
    {
        return $this->country;
    }

    /**
     * Set categories.
     *
     * @param \LerniBundle\Entity\Category|null $categories
     *
     * @return Facts
     */
    public function setCategories(\LerniBundle\Entity\Category $categories = null)
    {
        $this->categories = $categories;

        return $this;
    }

    /**
     * Get categories.
     *
     * @return \LerniBundle\Entity\Category|null
     */
    public function getCategories()
    {
        return $this->categories;
    }
}
